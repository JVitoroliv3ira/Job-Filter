package api.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OpportunityType {
    REMOTE("Presencial"),
    IN_PERSON("Remoto"),
    HYBRID("Híbrido");

    private final String value;
}
