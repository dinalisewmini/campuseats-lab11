import { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    qty: 1,
  });

  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(values) {
    const newErrors = {};

    if (values.name.trim().length < 2) {
      newErrors.name = "Name too short";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (Number(values.qty) < 1) {
      newErrors.qty = "Qty must be at least 1";
    }

    return newErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const foundErrors = validate(form);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return (
      <div>
        <h1>Order Successful</h1>
        <p>Thanks, {form.name}! Order received.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Place Order</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="qty">Quantity</label>
          <br />

          <input
            id="qty"
            name="qty"
            type="number"
            min="1"
            value={form.qty}
            onChange={handleChange}
          />

          {errors.qty && <p>{errors.qty}</p>}
        </div>

        <button type="submit">Place order</button>
      </form>
    </div>
  );
}

export default OrderPage;