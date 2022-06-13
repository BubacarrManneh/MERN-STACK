import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../features/Blogs/BlogSlice'

const BlogsForm = () => {

    const [text, setText] = useState()

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createBlog({text}))
        setText(' ')
    }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor='text'>Create a Blog</label>
            <input type="text" value={text} name='text' id='text' onChange={(e) => setText (e.target.value)} />
        </div>
        <div className="form-group">
            <button className='btn btn-block' type='submit'>Post Blog</button>
        </div>
      </form>
    </section>
  );
}

export default BlogsForm