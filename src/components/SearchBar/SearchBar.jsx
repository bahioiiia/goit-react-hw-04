import { forwardRef } from "react";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = forwardRef(function SearchBarComponent({ onSearch }, ref) {
  const handleSubmit = (values, actions) => {
    if (!values.query) {
      toast.error("Please, make your request!");
      return;
    }
    onSearch(values.query);

    actions.resetForm();
  };

  return (
    <header className={css.container} ref={ref}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.wraper}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />

          <Toaster
            position="top-right"
            toastOptions={{
              className: '',
              style: {
                border: '1px solid #713200',
                background: "lime",
              },
  }} />

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
});

export default SearchBar;