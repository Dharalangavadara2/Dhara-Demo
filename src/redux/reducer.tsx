import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    readingList: [],
    readingListTitles: [],
  },
  reducers: {
    addToReadingList: (state, action) => {
        
            const book:any = action.payload;
            const title = book.volumeInfo.title;
            if (!state.readingList.some((item:any) => item.volumeInfo.title === title)) {
              state.readingList.push(book);
            }
          
    },
    removeFromReadingList: (state, action) => {
      console.log("state,action",state,action.payload);
      
        const bookToRemove = action.payload;
        state.readingList = state.readingList.filter(
          (item:any) => item.id !== bookToRemove.id
        );
      },
      editReadingList: (state :any, action) => {
        const editedBook = action.payload.book;
        state.readingList = state.readingList.map((item:any) => {
          if (item.id === editedBook.id) {
            return editedBook;
          }
          return item;
        });
      },
    },
  });
  
  export const { addToReadingList, removeFromReadingList, editReadingList } = bookSlice.actions;
  
  export default bookSlice.reducer;
  
