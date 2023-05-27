package api.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(schema = "JOB_FILTER", name = "TB_TAGS")
@Entity
public class Tag {
    @Id
    @SequenceGenerator(name = "SQ_TAGS", schema = "JOB_FILTER", sequenceName = "SQ_TAGS", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_TAGS")
    @Column(name = "ID_TAG")
    private Long id;

    @Column(name = "NM_TAG")
    private String name;
}
