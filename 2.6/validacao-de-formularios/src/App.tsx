import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const validateEmail = (value: string) => {
    const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
    const isEmailValid = validRegex.test(value);
    return !isEmailValid;
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setEmail(target.value);
    const isValidEmail = validateEmail(target.value);
    setIsBtnDisabled(isValidEmail);
  };

  return (
    <>
    {
      showForm ? (
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="email"
              value={ email }
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ () => setShowForm(false) }
            disabled={ isBtnDisabled }
          >
            Login
          </button>
        </form>
      )
      : (
        <section>
          <h1>Bem-vindo(a)</h1>
        </section>
      )
    }
    </>
  );
}

export default App
