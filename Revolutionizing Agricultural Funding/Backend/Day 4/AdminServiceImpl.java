package com.example.adp.Services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.adp.Dto.AdminDto; // Changed import to AdminDto
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.AdminMapper; // Changed import to AdminMapper
import com.example.adp.Model.Admin; // Changed import to Admin
import com.example.adp.Repository.AdminRepository; // Changed import to AdminRepository
import com.example.adp.Services.AdminService; // Changed import to AdminService

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService { // Changed class name from UserServiceImpl to AdminServiceImpl and implemented AdminService

    private AdminRepository adminRepository; // Changed repository type to AdminRepository

    @Override
    public AdminDto createAdmin(AdminDto adminDto) { // Changed method signature from createUser to createAdmin and the parameter type from UserDto to AdminDto
        Admin admin = AdminMapper.mapToAdmin(adminDto); // Changed mapper method from mapToUser to mapToAdmin
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.mapToAdminDto(savedAdmin); // Changed mapper method from mapToUserDto to mapToAdminDto
    }

    @Override
    public AdminDto getAdminById(Long adminId) { // Changed method signature from getUserById to getAdminById and the parameter type from Long userId to Long adminId
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId)); // Changed error message to "Admin not found"
        return AdminMapper.mapToAdminDto(admin); // Changed mapper method from mapToUserDto to mapToAdminDto
    }

    @Override
    public List<AdminDto> getAllAdmins() { // Changed method signature from getAllUsers to getAllAdmins and the return type from List<UserDto> to List<AdminDto>
        List<Admin> admins = adminRepository.findAll(); // Changed repository method from findAllUsers to findAllAdmins
        return admins.stream().map(AdminMapper::mapToAdminDto).collect(Collectors.toList()); // Changed mapper method from mapToUserDto to mapToAdminDto
    }

    @Override
    public AdminDto updateAdmin(Long adminId, AdminDto adminDto) { // Changed method signature from updateUser to updateAdmin and the parameter type from Long userId to Long adminId, and the parameter type from UserDto to AdminDto
        Admin existingAdmin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId)); // Changed error message to "Admin not found"
        Admin updatedAdmin = AdminMapper.mapToAdmin(adminDto); // Changed mapper method from mapToUser to mapToAdmin
        updatedAdmin.setId(existingAdmin.getId());
        Admin savedAdmin = adminRepository.save(updatedAdmin);
        return AdminMapper.mapToAdminDto(savedAdmin); // Changed mapper method from mapToUserDto to mapToAdminDto
    }

    @Override
    public void deleteAdmin(Long adminId) { // Changed method signature from deleteUser to deleteAdmin and the parameter type from Long userId to Long adminId
        adminRepository.deleteById(adminId); // Changed repository method from deleteByIdUser to deleteByIdAdmin
    }
}
