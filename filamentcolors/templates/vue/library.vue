{% extends "vue/base.html" %}
{% load static %}

{% block content %}
    <span v-if="seen">
        [[ message ]]
      <button class="btn btn-danger">AAAHHHHH</button>
    </span>
  <button class="btn btn-primary" v-on:click="reverseMessage">Reverse!</button>
  <p></p>
  <ol>
    <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
    ></todo-item>
  </ol>
{% endblock %}
