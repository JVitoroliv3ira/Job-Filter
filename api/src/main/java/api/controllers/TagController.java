package api.controllers;

import api.models.Tag;
import api.repositories.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/tags")
@RestController
public class TagController {
    private final TagRepository tagRepository;

    @GetMapping(path = "/all")
    public ResponseEntity<List<Tag>> findAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(this.tagRepository.findAll());
    }
}
