const Task = (props) => {
    return (
      <li key={props.value}>{props.value}</li>
    );
  }

export default Task;