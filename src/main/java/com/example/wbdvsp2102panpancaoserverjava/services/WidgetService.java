package com.example.wbdvsp2102panpancaoserverjava.services;

import com.example.wbdvsp2102panpancaoserverjava.models.Widget;
import com.example.wbdvsp2102panpancaoserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

//    private List<Widget> widgets = new ArrayList<Widget>();
//    {
//        Widget w1 = new Widget(123l, "ABC123", "HEADING", 1, "Widget for Topic ABC123" );
//        Widget w2 = new Widget(234l, "ABC123", "PARAGRAPH", 1, "Lorem Ipsum" );
//        Widget w3 = new Widget(345l, "ABC234", "HEADING", 2, "Widget for Topic ABC234" );
//        Widget w4 = new Widget(456l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum" );
//        Widget w5 = new Widget(567l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum" );
//
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
//        widgets.add(w5);
//    }

    public List<Widget> findAllWidgets() {
//        return widgets;
        return (List<Widget>) repository.findAll();
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        return repository.findWidgetsForTopic(topicId);


//        List<Widget> ws = new ArrayList<>();
//        for (Widget w : widgets) {
//            if (w.getTopicId().equals(topicId)) {
//                ws.add(w);
//            }
//        }
//
//        return ws;
    }

    public Widget createWidgetForTopic(String topicId, Widget widget) {
        widget.setTopicId(topicId);

        return repository.save(widget);

//        widget.setId((new Date()).getTime());
//        widgets.add(widget);
//        return widget;
    }

    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
//        int index = -1;
//        for (int i = 0; i < widgets.size(); i++) {
//            if (widgets.get(i).getId().equals(id)) {
//                index = i;
//                widgets.remove(index);
//                return 1;
//            }
//        }
        return 1;
    }

    public Integer updateWidget(Long id, Widget widget) {
        Widget originalWidget = repository.findById(id).get();

        // TODO: copy all the other fields testing for null
        if (widget.getTopicId() != null) {
            originalWidget.setTopicId(widget.getTopicId());
        }
        if (widget.getText() != null) {
            originalWidget.setText(widget.getText());
        }
        if (widget.getHeight() != null) {
            originalWidget.setHeight(widget.getHeight());
        }
        if (widget.getWidth() != null) {
            originalWidget.setWidth(widget.getWidth());
        }
        if (widget.getOrdered() != null) {
            originalWidget.setOrdered(widget.getOrdered());
        }
        if (widget.getSize() != null) {
            originalWidget.setSize(widget.getSize());
        }
        if (widget.getSrc() != null) {
            originalWidget.setSrc(widget.getSrc());
        }
        if (widget.getType() != null) {
            originalWidget.setType(widget.getType());
        }
        repository.save(originalWidget);
        return 1;

//        for (int i = 0; i < widgets.size(); i++) {
//            if (widgets.get(i).getId().equals(id)) {
//                widgets.set(i, widget);
//                return 1;
//            }
//        }
//        return -1;
    }


}
