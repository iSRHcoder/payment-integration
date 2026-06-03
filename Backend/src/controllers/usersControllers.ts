import type { Request, Response } from "express";
import users from "../models/users.js";

// CREATE USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error,
    });
  }
};

// GET ALL USERS
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = users;

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error,
    });
  }
};

// GET USER BY ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: {
        id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error,
    });
  }
};

// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: {
        id,
        ...updatedData,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error,
    });
  }
};

// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: {
        id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
      error,
    });
  }
};
