package com.example.adp.Services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.adp.Dto.UserSignDto;
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.UserSignMapper;
import com.example.adp.Model.UserSign;
import com.example.adp.Repository.UserSignRepository;
import com.example.adp.Services.UserSignService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserSignServiceImpl implements UserSignService {

    private UserSignRepository userSignRepository;

    @Override
    public UserSignDto createUserSign(UserSignDto userSignDto) {
        UserSign userSign = UserSignMapper.mapToUserSign(userSignDto); // Corrected mapper method
        UserSign savedUserSign = userSignRepository.save(userSign);
        return UserSignMapper.mapToUserSignDto(savedUserSign);
    }

    @Override
    public UserSignDto getUserSignById(Long userSignId) {
        UserSign userSign = userSignRepository.findById(userSignId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userSignId));
        return UserSignMapper.mapToUserSignDto(userSign);
    }

    @Override
    public List<UserSignDto> getAllUsers() {
        List<UserSign> userSigns = userSignRepository.findAll();
        return userSigns.stream().map(UserSignMapper::mapToUserSignDto).collect(Collectors.toList());
    }

    @Override
    public UserSignDto updateUserSign(Long userSignId, UserSignDto userSignDto) {
        UserSign existingUserSign = userSignRepository.findById(userSignId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userSignId));
        UserSign updatedUserSign = UserSignMapper.mapToUserSign(userSignDto); // Corrected mapper method
        updatedUserSign.setId(existingUserSign.getId());
        UserSign savedUserSign = userSignRepository.save(updatedUserSign);
        return UserSignMapper.mapToUserSignDto(savedUserSign);
    }

    @Override
    public void deleteUser(Long userSignId) {
        userSignRepository.deleteById(userSignId);
    }
}
