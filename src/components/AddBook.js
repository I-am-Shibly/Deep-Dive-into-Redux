import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBookThunk } from '../redux/bookSlice/thunk/editBookThunk';
import { addBookThunk } from '../redux/bookSlice/thunk/addBookThunk';

const AddBook = ({ book }) => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  });

  const [formMode, setFormMode] = useState('Add');

  const dispatch = useDispatch();

  useEffect(() => {
    setFormMode('Edit');
    setFormData({
      id: book?.id,
      name: book?.name,
      author: book?.author,
      thumbnail: book?.thumbnail,
      price: book?.price,
      rating: book?.rating,
      featured: book?.featured,
    });
  }, [book]);

  const submitHandler = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      author: '',
      thumbnail: '',
      price: '',
      rating: '',
      featured: false,
    });
    setFormMode('Add');

    if (book) {
      dispatch(editBookThunk(formData));
      return;
    }

    const bookData = {
      ...formData,
      featured: formData.featured ? true : false,
    };
    const { id, ...bookDataWithoutId } = bookData;
    dispatch(addBookThunk(bookDataWithoutId));
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={submitHandler}>
        <div className="space-y-2">
          <label for="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label for="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label for="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label for="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={formData.featured}
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.checked })
            }
          />
          <label for="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {formMode === 'Edit' ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
