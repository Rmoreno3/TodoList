function TodoItem({ text, completed, key }) {
  return (
    <li key={key}>
      <p>{text}</p>
      {completed ? <span>✅</span> : <span>❌</span>}
    </li>
  );
}

export { TodoItem };
