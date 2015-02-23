load("set.js");
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");

var inter = cis.intersect(dmp);
print(inter.show()); // displays Raymond

function subset(set) {
  if (this.size() > set.size()) {
    return false;
  }
  else {
    for each (var member in this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }
  }
}

function size() {
  return this.dataStore.length;
}
