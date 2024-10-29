package com.ecommerce.quickbuy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.quickbuy.model.InfoData;
import com.ecommerce.quickbuy.repository.InfoDataRepository;

@Service
public class InfoDataService {

    @Autowired
    private InfoDataRepository infoDataRepository;

    public void addData(InfoData infoData) {
        infoDataRepository.save(infoData);
    }

    public List<InfoData> findAllData() {
        return infoDataRepository.findAll();
    }

    public void deleteData(int id) {
        infoDataRepository.deleteById(id);
    }

    public InfoData updateData(InfoData infoData) {
        InfoData updatedData = infoDataRepository.findById(infoData.getId()).orElse(null);
        updatedData.setImageUrl(infoData.getImageUrl());
        updatedData.setDescription(infoData.getDescription());
        updatedData.setTitle(infoData.getTitle());
        infoDataRepository.save(updatedData);
        return updatedData;
    }

}
