# pdd-dashboard

[![Build Status](https://travis-ci.com/pddisense/pdd-dashboard.svg?branch=master)](https://travis-ci.com/pddisense/pdd-dashboard)

This repository contains the source code for the PDD dashboard.
The server component is written in Scala and the user interface in Javascript ES6.

## Build

To build the dashboard, you will need [Java JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), [Node ≥10.9.0](https://nodejs.org) and [Yarn](https://yarnpkg.com).
The server component is built with SBT, which can be automatically downloaded and configured by using the `sbt` wrapper script included at the root of the repository.

First clone the repository:
```bash
git clone git@github.com:pddisense/pdd-dashboard.git
cd pdd-dashboard
```

Then build and test the dashboard:
```bash
yarn install
yarn build
./sbt compile test
```

## About

Private Data Donor is a research project whose goal is to gather statistics about Web search queries in a privacy-preserving way.
Collected data is then used to help monitoring and predicting outbreaks of infectious diseases such as flu.
It is developed by [UCL's CS department](http://www.cs.ucl.ac.uk/home/), in the frame of the [i-sense project](https://www.i-sense.org.uk/), the EPSRC IRC in Early Warning Sensing Systems for Infectious Diseases.

## License

Private Data Donor is made available under the terms of the GNU GPL v3.
