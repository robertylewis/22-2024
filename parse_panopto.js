/*
This script parses Panopto API data from a JSON file and populates the 
"video" fields in the lecture YAML file.

It requires `yaml` as a Node dependency. There's enough going on with Ruby, so
I didn't bother adding a Node project; just `npm install yaml` (it has no
subdependencies, so it's a lightweight uninstall when you're done).
*/

const fs = require('fs')
const YAML = require('yaml')

const LECTURE_FILE = 'web/_data/lectures.yml'
const PANOPTO_FILE = 'panopto_data.json'

const panFile = fs.readFileSync(PANOPTO_FILE)
const results = JSON.parse(panFile)["d"]["Results"]

const urlsWithDates = results.map(obj => {
  const url = obj["ViewerUrl"]
  const dateEntry = obj["StartTime"]
  const date = new Date(parseInt(dateEntry.substring(6, dateEntry.length - 2)))
  const formatter = new Intl.DateTimeFormat('en-US',
    { day: 'numeric', month: 'short' })
  return [url, formatter.format(date)]
})

const lecFile = fs.readFileSync(LECTURE_FILE)
const yaml = YAML.parse(lecFile.toString())

urlsWithDates.forEach(entry => {
  const lec = yaml["lectures"].find(obj => obj["date"] === entry[1])
  if (lec) {
    lec["video"] = entry[0]
  }
})

fs.writeFileSync(LECTURE_FILE, YAML.stringify(yaml))
