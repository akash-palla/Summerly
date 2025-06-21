// scripts/createUser.js - Helper script to create test users
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// User Schema (duplicate from server.js for this script)
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    lastLogin: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);

async function createTestUser() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        const testUser = new User({
            email: 'test@summerly.com',
            password: 'password123',
            firstName: 'Test',
            lastName: 'User'
        });

        await testUser.save();
        console.log('Test user created successfully!');
        console.log('Email: test@summerly.com');
        console.log('Password: password123');

        process.exit(0);
    } catch (error) {
        if (error.code === 11000) {
            console.log('Test user already exists!');
        } else {
            console.error('Error creating user:', error);
        }
        process.exit(1);
    }
}

createTestUser();