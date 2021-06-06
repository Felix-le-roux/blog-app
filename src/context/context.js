import React, { useContext, useReducer } from 'react';
import reducer from '../reducer/reducer';

const AppContext = React.createContext();

const initialState = {
  data: [
    {
      id: 1,
      title: 'Post 1',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in, enim iste ipsam quos facilis ratione velit temporibus totam fugit voluptates dignissimos error quas similique asperiores iusto ex odio officia aliquid? Suscipit sed nostrum natus, delectus dicta quos commodi sequi nemo, sapiente repellat culpa, ipsum alias aliquid doloremque fugit fuga.',
    },
    {
      id: 2,
      title: 'Post 2',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in, enim iste ipsam quos facilis ratione velit temporibus totam fugit voluptates dignissimos error quas similique asperiores iusto ex odio officia aliquid? Suscipit sed nostrum natus, delectus dicta quos commodi sequi nemo, sapiente repellat culpa, ipsum alias aliquid doloremque fugit fuga.',
    },
    {
      id: 3,
      title: 'Post 3',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in, enim iste ipsam quos facilis ratione velit temporibus totam fugit voluptates dignissimos error quas similique asperiores iusto ex odio officia aliquid? Suscipit sed nostrum natus, delectus dicta quos commodi sequi nemo, sapiente repellat culpa, ipsum alias aliquid doloremque fugit fuga.',
    },
    {
      id: 4,
      title: 'Post 4',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in, enim iste ipsam quos facilis ratione velit temporibus totam fugit voluptates dignissimos error quas similique asperiores iusto ex odio officia aliquid? Suscipit sed nostrum natus, delectus dicta quos commodi sequi nemo, sapiente repellat culpa, ipsum alias aliquid doloremque fugit fuga.',
    },
    {
      id: 5,
      title: 'Post 5',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum in, enim iste ipsam quos facilis ratione velit temporibus totam fugit voluptates dignissimos error quas similique asperiores iusto ex odio officia aliquid? Suscipit sed nostrum natus, delectus dicta quos commodi sequi nemo, sapiente repellat culpa, ipsum alias aliquid doloremque fugit fuga.',
    },
  ],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPost = (newPost) => {
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addPost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
