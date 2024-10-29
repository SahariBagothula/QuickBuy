package com.ecommerce.quickbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.quickbuy.model.InfoData;
import com.ecommerce.quickbuy.service.InfoDataService;

@RestController
@RequestMapping("/data")
public class InfoDataController {

    @Autowired
    private InfoDataService infoDataService;

    @PostMapping("/add")
    public ResponseEntity<String> addData(@RequestBody InfoData infoData) {
        infoDataService.addData(infoData);
        return ResponseEntity.ok().body("Added data successfully");
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<InfoData>> findAllData() {
        List<InfoData> dataList = infoDataService.findAllData();
        return ResponseEntity.ok(dataList);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteData(@RequestParam int id) {
        infoDataService.deleteData(id);
        return ResponseEntity.ok().body("Data deleted successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<InfoData> updateData(@RequestBody InfoData infoData) {
        InfoData updatedData = infoDataService.updateData(infoData);
        return ResponseEntity.ok(updatedData);
    }

}
