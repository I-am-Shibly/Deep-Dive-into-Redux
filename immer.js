const { produce } = require('immer');
const { createStore } = require('@reduxjs/toolkit');

const university = {
  name: 'Example University',
  location: 'Cityville',
  departments: {
    science: {
      head: 'Dr. Smith',
      courses: {
        biology: {
          courseName: 'Biology 101',
          instructor: 'Prof. Brown',
          schedule: {
            days: ['Monday', 'Wednesday', 'Friday'],
            time: '10:00 AM - 11:30 AM',
          },
          students: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
          ],
        },
        chemistry: {
          courseName: 'Chemistry 101',
          instructor: 'Prof. Green',
          schedule: {
            days: ['Tuesday', 'Thursday'],
            time: '2:00 PM - 3:30 PM',
          },
          students: [
            { id: 3, name: 'Charlie' },
            { id: 4, name: 'Dave' },
          ],
        },
      },
    },
    arts: {
      head: 'Dr. Johnson',
      courses: {
        literature: {
          courseName: 'Literature 101',
          instructor: 'Prof. White',
          schedule: {
            days: ['Monday', 'Wednesday'],
            time: '1:00 PM - 2:30 PM',
          },
          students: [
            { id: 5, name: 'Eve' },
            { id: 6, name: 'Frank' },
          ],
        },
        history: {
          courseName: 'History 101',
          instructor: 'Prof. Black',
          schedule: {
            days: ['Tuesday', 'Thursday'],
            time: '11:00 AM - 12:30 PM',
          },
          students: [
            { id: 7, name: 'Grace' },
            { id: 8, name: 'Hank' },
          ],
        },
      },
    },
  },
};

const reducer = (state = university, action) => {
  if (action.type === 'courseUpdate') {
    return produce(state, (draftState) => {
      draftState.departments.science.head = action.payload;
    });
  }
  return state;
};

const updateData = (name) => {
  return {
    type: 'courseUpdate',
    payload: name,
  };
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(updateData('Mr. Shibly'));
