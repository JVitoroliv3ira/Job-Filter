package api.controllers;

import api.dtos.PaginateDTO;
import api.dtos.PaginatedResultDTO;
import api.dtos.filters.OpportunityFilterDTO;
import api.models.Opportunity;
import api.repositories.OpportunityRepository;
import api.services.OpportunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/opportunities")
@RestController
public class OpportunityController {
    private final OpportunityService opportunityService;

    @PostMapping(path = "/search")
    public ResponseEntity<PaginatedResultDTO<Opportunity>> search(@RequestBody OpportunityFilterDTO filter) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new PaginatedResultDTO<>(this.opportunityService.search(filter)));
    }
}
