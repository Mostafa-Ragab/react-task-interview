const INITIAL_STATE = {
    studentList: [
      {
          Name:"Mostafa Ragab raslan",
          Status:"Intial Acceptance",
          Major:"Medcine"
      },
      {
          Name:"Mohamed Samy Abdelaad",
          Status:"Intial Acceptance",
          Major:"Medcine"
      },
      {
          Name:"Zakaria Hassan Abdellatif",
          Status:"Rejected",
          Major:"Medcine"
      },
      {
          Name:"Zakaria Mohamed Zakaria",
          Status:"Intial Acceptance",
          Major:"Medcine"
      },
      {
        Name:"Hossam Mokhtar Saad",
        Status:"Rejected",
        Major:"Meicine"
      },
      {
        Name:"Ashraf Mohamed abdellstar",
        Status:"Under Review",
        Major:"Meicine"
      },
      {
        Name:"Sayed Saeed Kamel",
        Status:"Conditional Acceptance",
        Major:"Medcine"
      },
      {
          Name:"Omr Mukhtar Ismael",
          Status:"Conditional Acceptance",
          Major:"Medcine"
      }
  ]
};
  
  const studentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default studentReducer;