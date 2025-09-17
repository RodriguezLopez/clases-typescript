import type { RequestHandler } from "express";

export const getBooksController: RequestHandler = async (req, res) => {
  try {
    const response = await getBooks();
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Something crashed your app" });
  }
};

export const getBookController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is required" });

  try {
    const response = await getBook(id);
    if (!response) return res.status(404).json({ message: "Book not found" });
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Something crashed your app" });
  }
};

export const createBookController: RequestHandler = async (req, res) => {
  try {
    const response = await createBook(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ error: "Something crashed your app" });
  }
};

export const deleteBookController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is required" });

  try {
    const response = await deleteBook(id);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Something crashed your app" });
  }
};

export const updateBookController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id is required" });

  try {
    const response = await updateBook(id, req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Something crashed your app" });
  }
};

// Example implementation: replace with your actual logic and Book type
async function getBooks(): Promise<any[]> {
    // Simulate fetching all books
    return [
        { id: "1", title: "Book One" },
        { id: "2", title: "Book Two" }
    ];
}

async function deleteBook(id: string): Promise<any | null> {
    // Simulate deleting a book by id
    // Return deleted book or null if not found
    return { id, deleted: true };
}

async function updateBook(id: string, data: any): Promise<any | null> {
    // Simulate updating a book by id
    // Return updated book or null if not found
    return { id, ...data };
}

async function getBook(id: string): Promise<any | null> {
    // Simulate fetching a book by id
    // Return null if not found
    return null;
}

async function createBook(data: any): Promise<any> {
    // Simulate creating a book
    return { id: String(Date.now()), ...data };
}

