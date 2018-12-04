/*
 * PDD is a platform for privacy-preserving Web searches collection.
 * Copyright (C) 2016-2018 Vincent Primault <v.primault@ucl.ac.uk>
 *
 * PDD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * PDD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with PDD.  If not, see <http://www.gnu.org/licenses/>.
 */

name := "pdd-dashboard"
version := "0.0.1"
organization := "ucl"

scalaVersion := "2.12.6"

resolvers += Resolver.mavenLocal

libraryDependencies ++= Seq(
  "com.twitter" %% "util-core" % "18.11.0",
  "com.twitter" %% "inject-app" % "18.11.0",
  "com.twitter" %% "finagle-stats" % "18.11.0",
  "com.twitter" %% "finatra-http" % "18.11.0",
  "com.twitter" %% "finatra-httpclient" % "18.11.0",
  "com.pauldijou" %% "jwt-core" % "0.16.0",
  "ch.qos.logback" % "logback-classic" % "1.2.3",
  "io.sentry" % "sentry-logback" % "1.6.4",
  "com.datadoghq" % "java-dogstatsd-client" % "2.5",
  "org.scalatest" %% "scalatest" % "3.0.5" % "test"
)

mainClass in(Compile, run) := Some("ucl.pdd.dashboard.PddDashboardMain")

// Docker configuration.
enablePlugins(JavaAppPackaging)
enablePlugins(DockerPlugin)
dockerUsername in Docker := Some("pddisense")
dockerAliases ++= Seq(dockerAlias.value.withTag(Option("latest")))
dockerExposedPorts in Docker := Seq(8001, 9990)
