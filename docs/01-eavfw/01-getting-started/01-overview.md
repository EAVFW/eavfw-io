---
layout: article
title:  EAVFW Overview
description: EAVFW - Business Application Framework - An accelerator that helps you build documented business applications quickly and going from POC to MVP and finally to Production.
date:   2024-01-23 12:00:00 +0100
image:  '/images/20.jpg'
tags:   [EAVFW]
next: quickstart
---

# EAVFW Overview

EAVFW is an opinionated, cloud and OnPrem ready stack for building business applications.​ EAVFW is delivered through a collection of NuGet and NPM packages that handle specific usecases. Business applications is model first approach of designing a application for the business, where the model supports the processes for which the business operates with. 

EAVFW then is able to generate everything from the database layer, api surface and UI to work with these processes and underlaying data model. Everything is configured and controlled from a manifest file defining everything from Entity, Attributes and Values (EAV) to workflows and processes (Framework).


# Why EAVFW

EAVFW was developed highly opinionated to support the following ideas:

- Manifest - Define / Configuration of the system using proven building blocks
- Scarfolding - Scarfold the project initialy and UI that follows the manifest. You get a free frontend business application for your defined system without custom frontend coding out of the box.
- Plugins - A well defined way to modify data when leaving the system or when being saved to the datbase. You define the code that runs on all, subsets or individial records before they are saved and can manipuate or trigger new workflows.
- Processes/Workflows - A well defined way to create workflow or processes that work on data ondemand (triggered) or using cron jobs (scheduled)
- Role Based Cccess Control (RBAC) - Everything is role based and all the defined elements is configured for which roles that can see and work with them. Comes out of the box with concepts as Roles, Groups, Permssisions and Users.



## Manifest

## Scarfolding

## Plugins

## Processes

## Role Based Access Control