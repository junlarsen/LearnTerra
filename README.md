# LearnTerra

LearnTerra, a web-based Legends of Runeterra replay tool.

# Overview

## Table of Contents

- [What is LearnTerra?](#what-is-learnterra)
- [Implemented Features](#implemented-features)
- [Documentation](#documentation)
- [Known Issues](#known-issues)
- [Legal](#legal)

## What is LearnTerra

This project was built for the Riot Games API Challenge (2019).

The application allows you to replay a Legends of Runeterra match recorded with our collector tool in your browser.

## Implemented Features

#### Comment System

LearnTerra is aimed at user improvement and collaboration. We implemented a basic comment system for the replay. You can leave comments for each frame which everyone else will be able to view. 

#### Frame Splitting

LearnTerra splits the game into a set of frames. These frames can be navigated through the navigation bar. The game can be automatically played with the "Play" button. This traverses the frames with a 400 millisecond delay between each frame.

## Documentation

## Known Issues

#### The 2v1 position

The 2v1 position is a scenario where one card is centered below or above two opposing cards. The only issue is that this position is not achievable in the actual game. We prioritized completing other parts of the applications as this is a decently tough calculation to do which might consume a lot of time which we wanted to spend working on other parts of the app.

#### Disappearing cards

Sometimes there are other animations on the screen during the game which cause the API to return blank for some cards. This results in cards disappearing from the replay for one frame.

#### Multiple frames have the same board

Spells are currently not visualized in the replay. This means some frames will not change visually.

## Legal

#### License

The project is licensed under the MIT. A copy of this license can be found inside the LICENSE file.

#### Riot Games

LearnTerra was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.