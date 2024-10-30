import React from 'react';
import { create } from "zustand";

// Data
import {
  materials,
  drevo_typ
} from '../../data';

// Components
import Header from '../Header';
import Content from '../Content';
import SingleOptions from '../SingleOptions';
import Footer from '../Footer';

const stepStore = create((set, get) => ({

  steps: [
    { step: 0, name: "material", label: "Materiál", value: null, data: materials, heading: "Vyberte Materiál", image: "" },
    { step: 1, name: "drevo_typ", label: "Typ", value: null, data: drevo_typ, heading: "Vyberte Typ Dřeva", image: "0ea0fd2e-4ca2-4ba9-a753-fac012739e4a.jpg" },
  ],

  history: [],

  initializeHistory: () => set((state) => {
    const firstStep = state.steps.find((step) => step.step === 0);
    if (firstStep && state.history.length === 0) {
      return { history: [ firstStep ] };
    }
    return state;
  }),

  nextStep: (nextStepName) => set((state) => {
    const nextStep = state.steps.find((step) => step.name === nextStepName);
    if (nextStep) {
      return { history: [...state.history, nextStep] };
    }
    return state;
  }),

  prevStep: () => set((state) => {
    if (state.history.length > 1) {
      return { history: state.history.slice(0, -1) };
    }
    return state;
  }),

  getCurrentStep: () => {
    const history = get().history;
    return history[history.length - 1] || null;
  },

  setStepValue: (stepName, stepValue) => set((state) => {
    const stepIndex = state.history.findIndex((step) => step.name === stepName);
    if (stepIndex === -1) return state;

    const updatedStep = { ...state.history[stepIndex], value: stepValue };

    const updatedHistory = [...state.history];
    updatedHistory[stepIndex] = updatedStep;

    return { history: updatedHistory };
  }),

  isStepCompleted: () => {
    const lastStep = get().history[get().history.length - 1];
    return lastStep ? lastStep.value !== null : false;
  },

}));


class App extends React.Component {

  constructor(props) {
    super(props);
    const { history } = stepStore.getState();
    this.state = {
      history,
    };
  }

  // Subscribe to store updates and initialize history when the component mounts
  componentDidMount() {
    this.unsubscribe = stepStore.subscribe((state) => {
      this.setState({
        history: state.history,
      });
    });

    // Initialize history with the first step if it hasn't been done
    stepStore.getState().initializeHistory();
  }

  // Unsubscribe from the store when the component unmounts
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  increaseStep = (nextStepValue) => {
    stepStore.getState().nextStep(nextStepValue);
  };

  decreaseStep = () => {
    stepStore.getState().prevStep();
  };

  renderHeader = () => {
    const history = stepStore.getState().history;
    return (
      <Header
        history={history}
      />
    );
  };

  renderContent = () => {
    const currentStep = stepStore.getState().getCurrentStep();
    if (currentStep) {
      return (
        <Content
          heading={currentStep.heading} 
          step={currentStep.step} 
          image={currentStep.image} 
        >
          <SingleOptions 
            name={currentStep.name} 
            data={currentStep.data} 
            onChange={(value) => stepStore.getState().setStepValue(currentStep.name, value)} 
          />
        </Content>
      );
    }
  };

  renderFooter = () => {
    const isStepCompleted = stepStore.getState().isStepCompleted();
    return (
      <Footer
        isStepSelected={isStepCompleted} 
        onClick={() => stepStore.getState().nextStep()} 
      />
    );
  };

  render() {
    return (
      <div className="w-full h-screen max-h-screen flex flex-col items-center overflow-x-hidden">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  };
};

export default App;