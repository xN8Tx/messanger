const deleteCode = async (email: string): Promise<boolean> => {
  const data = await fetch(`${process.env.JSON_DB_IP}/${email}`, {
    method: 'DELETE',
  });

  return data.ok;
};

const addCode = async (code: number, email: string): Promise<boolean> => {
  try {
    await deleteCode(email);
  } finally {
    const body = { id: email, code: code };

    const data = await fetch(`${process.env.JSON_DB_IP}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    setTimeout(() => deleteCode(email), 60000);

    // eslint-disable-next-line no-unsafe-finally
    return data.ok;
  }
};

const getCode = async (email: string): Promise<number> => {
  const res = await fetch(`${process.env.JSON_DB_IP}/${email}`);
  const data = await res.json();

  return data.code;
};

export { deleteCode, addCode, getCode };
