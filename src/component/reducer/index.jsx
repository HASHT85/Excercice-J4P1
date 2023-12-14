 export const initialState = {
    numbers: [],
    pairs: []
  };
  
function numbersReducer(state, action) {
    switch (action.type) {
      case 'ADD_NUMBER':
        if (state.numbers.length >= 30) {
          alert("La liste a atteint son maximum");
          return { ...state };
        }
        let newNumber;
        do {
          newNumber = Math.floor(Math.random() * 30) + 1;
        } while (state.numbers.includes(newNumber));
        return { ...state, numbers: [...state.numbers, newNumber] };
  
        case 'GENERATE_PAIRS':
            let tempPairs = [];
            for (let i = 0; i < state.numbers.length; i += 2) {
              if (i === state.numbers.length - 1) {
                // Si c'est le dernier élément et la liste est de longueur impaire
                tempPairs[tempPairs.length - 1].push(state.numbers[i]);
              } else {
                tempPairs.push(state.numbers.slice(i, i + 2));
              }
            }
            return { ...state, pairs: tempPairs };
          
    }
  }
  
  export default numbersReducer