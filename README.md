# Hannotate: Flexible Annotation for Text Analytics from Anywhere

## Check out our [walk-through video presentation](https://www.youtube.com/watch?v=H1PTrkgb_BE) and [Online demo](http://13.229.214.217:8000/)

## Introduction
A highly flexible, lightweight web-based framework for a wide range of text annotation from both desktop and mobile
devices. Currently, the framework supports the following types of annotations:

* Single text annotation:
  e.g., topic labeling, and sentiment and viewpoint recognition.
* Text pair annotation:
  e.g., entailment recognition and semantic similarity measurement.
* Span annotation:
  e.g., named entity recognition and aspect-specific sentiment recognition.
* Span pair annotation:
  e.g., relational extraction and co-reference recognition.
* Sentence rewriting:
  e.g., machine translation and natural language inference.

## Requirements

Python3

## Setup

### Backend

* Set "server_host" and "server_port" in file <b>backend/config.json</b>
* Go to <b>backend</b> and run <b>waitress_server</b> from terminal

### Frontend

* In file <b>frontend/dist/assets/app.config.json</b>, set "apiUrl" to backend's API service to the corresponding values as
  above configuration for backend
* Go to <b>frontend</b> and run <b>hannotate</b> from terminal

### Default accounts

There are <b>admin</b> (for admin and task manager roles) and <b>annotator</b> (for annotator role)
users, both have password <b>123456</b> in the provided database

## Sample datasets

The sample for each type of annotation are provided in folder <b>sample_datasets</b> 
