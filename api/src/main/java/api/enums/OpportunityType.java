package api.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum OpportunityType {
    REMOTE("Remoto"),
    IN_PERSON("Presencial"),
    HYBRID("Híbrido");

    private final String key;
    private final String value;

    OpportunityType(String value) {
        this.key = this.name();
        this.value = value;
    }

    @JsonCreator
    public static OpportunityType deserialize(@JsonProperty("key") String key) {
        return OpportunityType.valueOf(key);
    }
}
