const swaggerJSDoc = require('swagger-jsdoc');
const mongoose = require("mongoose");
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nursery API',
            version: '1.0.0',
            description: 'This is a RESTful API for a nursery.',
        },
    },
    servers: [
        {
            url: "http://localhost:8080",
            description: "Local server"
        }
    ],
    apis: ['./Route/*.js', './app.js',],
    components: {
        schemas: {
            Admin: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        required: true,
                        unique: true
                    },
                    password: {
                        type: 'string',
                        required: true
                    }
                }
            },
            Child: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'number',
                        unique: true
                    },
                    fullName: {
                        type: 'string',
                        required: true
                    },
                    age: {
                        type: 'number',
                        required: true
                    },
                    level: {
                        type: 'string',
                        required: true,
                        enum: ['PreKG', 'KG1', 'KG2']
                    },
                    gender: {
                        type: 'string',
                        required: true,
                        enum: ['male', 'female']
                    },
                    address: {
                        type: 'object',
                        properties: {
                            city: {
                                type: 'string',
                                required: true
                            },
                            street: {
                                type: 'string',
                                required: true
                            },
                            building: {
                                type: 'string',
                                required: true
                            }
                        }
                    },
                    image: {
                        type: 'string',
                        required: true
                    }
                }
            },
            Class: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'number',
                        unique: true
                    },
                    name: {
                        type: 'string',
                        required: true
                    },
                    supervisor: {
                        type: 'string',
                        required: true
                    },
                    children: {
                        type: 'array',
                        items: {
                            type: 'number'
                        }
                    }
                }
            },
            Teacher: {
                type: 'object',
                properties: {
                    fullName: {
                        type: 'string',
                        required: true
                    },
                    email: {
                        type: 'string',
                        required: true,
                        unique: true
                    },
                    password: {
                        type: 'string',
                        required: true
                    },
                    image: {
                        type: 'string',
                        required: true
                    }
                }
            }
        }
    }
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;