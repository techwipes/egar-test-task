package com.baturin.springboot_backend.controller;

import com.baturin.springboot_backend.exception.ResourceNotFoundException;
import com.baturin.springboot_backend.model.Security;
import com.baturin.springboot_backend.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SecurityController {

    @Autowired
    private SecurityRepository securityRepository;

    // get all securities
    @GetMapping("/securities")
    public List<Security> getAllSecurities() {
        return securityRepository.findAll();
    }

    //create security rest api
    @PostMapping("/securities")
    public Security createSecurity(@RequestBody Security security) {
        return securityRepository.save(security);
    }

    //get security by id rest api
    @GetMapping("/securities/{id}")
    public ResponseEntity<Security> getSecurityById(@PathVariable Long id) {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not exist with id: " + id));
        return ResponseEntity.ok(security);
    }

    // update security rest api
    @PutMapping("/securities/{id}")
    public ResponseEntity<Security> updateSecurity(@PathVariable Long id, @RequestBody Security securityDetails) {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not exist with id: " + id));

        security.setDate(securityDetails.getDate());
        security.setName(securityDetails.getName());
        security.setPrice(securityDetails.getPrice());
        Security updateSecurity = securityRepository.save(security);
        return ResponseEntity.ok(updateSecurity);
    }

    //delete security rest api
    @DeleteMapping("/securities/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSecurity(@PathVariable Long id){
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not exist with id: " + id));
        securityRepository.delete(security);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
