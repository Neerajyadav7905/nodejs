const express = require('express');
const jwt = require('jsonwebtoken');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const db = require('./db');
const User = require('./User');

app.use(express.json());

const PORT = 5000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js JWT Swagger UI Example',
      version: '1.0.0',
      description: 'A simple Node.js app with JWT and Swagger UI',
    },
    security: [{ BearerAuth: [] }],
  },
  apis: ['express.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));


app.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 * /users:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     summary: 
 *     description: 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       201:
 *         description: 
 *       401:
 *         description: Unauthorized - Invalid token
 *       403:
 *         description: Forbidden - Token not provided
 */

app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
