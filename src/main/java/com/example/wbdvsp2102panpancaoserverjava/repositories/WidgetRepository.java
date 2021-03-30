package com.example.wbdvsp2102panpancaoserverjava.repositories;

import com.example.wbdvsp2102panpancaoserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository
        extends CrudRepository<Widget, Long> {

    @Query(value = "SELECT * FROM widgets WHERE topic_id = :tid ", nativeQuery = true)
    public List<Widget> findWidgetsForTopic(@Param("tid")String topicId);
}
