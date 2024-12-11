import React from 'react';
import { create } from "zustand";

// Steps
import { steps } from '../../steps';

// Components
import Header from '../Header';
import Content from '../Content';
import SingleOptions from '../SingleOptions';
import Footer from '../Footer';

/* stepStore handling app states */
const stepStore = create((set, get) => ({

  history: [],

  initialStep: "material",

  // Adds empty value attribute to given step and assigns an index
  prepareStep: (step) => {
    const currentIndex = get().history.length;
    return { ...step, value: null, index: currentIndex };
  },

  // Initializes empty history with the step specified by initialStep
  initializeHistory: () => set((state) => {
    const initialStepName = get().initialStep;
    const initialStep = steps.find((step) => step.name === initialStepName);
    if (initialStep && state.history.length === 0) {
      return { history: [ get().prepareStep(initialStep) ] };
    }
    return state;
  }),

  // Searches for selected data item in the current step in history
  // Reads next_step attribute from selected data item
  // Appends new step to history with name == next_step
  nextStep: () => set((state) => {
    const lastStep = state.history[state.history.length - 1];
    if (!lastStep || !lastStep.value) return state;

    // Find the selected item in the last step's data
    const selectedItem = lastStep.data.find((item) => item.value === lastStep.value);
    if (!selectedItem || !selectedItem.next_step) return state;

    // Find the step corresponding to the next_step attribute
    const nextStep = steps.find((step) => step.name === selectedItem.next_step);
    if (!nextStep) return state;

    // Append the next step to the history
    return { history: [ ...state.history, get().prepareStep(nextStep) ] };
  }),

  // Removes current step from history
  prevStep: () => set((state) => {
    if (state.history.length > 1) {
      return { history: state.history.slice(0, -1) };
    }
    return state;
  }),

  // Returns current step from history
  getCurrentStep: () => {
    const history = get().history;
    return history[history.length - 1] || null;
  },

  // Sets value attribute within step with given name in history
  setStepValue: (stepName, stepValue) => set((state) => {
    const stepIndex = state.history.findIndex((step) => step.name === stepName);
    if (stepIndex === -1) return state;

    const updatedStep = { ...state.history[stepIndex], value: stepValue };

    const updatedHistory = [...state.history];
    updatedHistory[stepIndex] = updatedStep;

    return { history: updatedHistory };
  }),

  // Calculates total price over all steps in history
  getTotal: () => {
    const history = get().history;
    let total = 0;

    history.forEach((step) => {
      if (step.value) {
        const selectedItem = step.data.find((item) => item.value === step.value);
        if (selectedItem) {
          total += selectedItem.price;
        }
      }
    });

    return total;
  },

  // Returns true if current step in history contains a value
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
      console.log(currentStep.index);
      let imageFull = currentStep && currentStep.index === 0;
      console.log(imageFull);
      return (
        <Content
          heading={currentStep.heading} 
          index={currentStep.index} 
          image={currentStep.image} 
        >
          <SingleOptions 
            name={currentStep.name} 
            data={currentStep.data} 
            imageFull={imageFull} 
            onChange={(value) => stepStore.getState().setStepValue(currentStep.name, value)} 
          />
        </Content>
      );
    }
  };

  renderFooter = () => {
    const isStepCompleted = stepStore.getState().isStepCompleted();
    const totalPrice = stepStore.getState().getTotal();
    return (
      <Footer
        isStepSelected={isStepCompleted} 
        totalPrice={totalPrice} 
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