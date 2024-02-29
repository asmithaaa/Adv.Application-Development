package com.example.adp.Services;

import java.util.List;

import com.example.adp.Dto.AdminDto; // Changed import to AdminDto

public interface AdminService { // Changed interface name from UserService to AdminService

    AdminDto createAdmin(AdminDto adminDto); // Changed method name from createUser to createAdmin and the parameter type from UserDto to AdminDto

    AdminDto getAdminById(Long adminId); // Changed method name from getUserById to getAdminById and the parameter type from Long userId to Long adminId

    List<AdminDto> getAllAdmins(); // Changed method name from getAllUsers to getAllAdmins and the return type from List<UserDto> to List<AdminDto>

    AdminDto updateAdmin(Long adminId, AdminDto adminDto); // Changed method name from updateUser to updateAdmin and the parameter type from Long userId to Long adminId, and the parameter type from UserDto to AdminDto

    void deleteAdmin(Long adminId); // Changed method name from deleteUser to deleteAdmin and the parameter type from Long userId to Long adminId
}
