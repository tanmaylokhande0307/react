import { useDispatch, useSelector } from 'react-redux'
import { setTitle } from '../Reducers';

const Courses = () => {
 
    const  title  = useSelector((state) => state.course.title);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setTitle(e));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(title);
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" value={title} onChange={(e) => handleChange(e.target.value)}/>
        {title}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Courses