import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBookThunk } from '../redux/bookSlice/thunk/editBookThunk';

const AddBook = ({ book }) => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
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
    dispatch(editBookThunk(formData));
  };

  return (
    <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form class="book-form" onSubmit={submitHandler}>
        <div class="space-y-2">
          <label for="name">Book Name</label>
          <input
            required
            class="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div class="space-y-2">
          <label for="category">Author</label>
          <input
            required
            class="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </div>

        <div class="space-y-2">
          <label for="image">Image Url</label>
          <input
            required
            class="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
          />
        </div>

        <div class="grid grid-cols-2 gap-8 pb-4">
          <div class="space-y-2">
            <label for="price">Price</label>
            <input
              required
              class="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          <div class="space-y-2">
            <label for="quantity">Rating</label>
            <input
              required
              class="text-input"
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

        <div class="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            class="w-4 h-4"
            checked={formData.featured}
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.checked })
            }
          />
          <label for="featured" class="ml-2 text-sm">
            {' '}
            This is a featured book{' '}
          </label>
        </div>

        <button type="submit" class="submit" id="submit">
          {Object.keys(book ?? {}).length > 0 ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
