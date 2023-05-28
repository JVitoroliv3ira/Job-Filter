package api.controllers;

import api.dtos.PaginatedResultDTO;
import api.dtos.filters.CompanyFilterDTO;
import api.models.Company;
import api.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/companies")
@RestController
public class CompanyController {
    private final CompanyService companyService;

    @PostMapping(path = "/search")
    public ResponseEntity<PaginatedResultDTO<Company>> search(@RequestBody CompanyFilterDTO request) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new PaginatedResultDTO<>(this.companyService.paginate(request)));
    }
}

