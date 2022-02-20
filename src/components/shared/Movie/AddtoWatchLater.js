import toast from "react-hot-toast";

export const AddtoWatchLater = (item, setter) => {
  let WatchLater = JSON.parse(localStorage.getItem("WatchLater"));
  if (WatchLater == null) WatchLater = [];
  if (!WatchLater.some((Watch) => Watch.id === item.id)) {
    WatchLater.push(item);
    setter(true);
    toast.success("added to watch Later", {
      style: { background: "#333", color: "#fff" },
      duration: 1000,
    });
  } else {
    WatchLater = WatchLater.filter((watch) => watch.id == item.id);
    setter(false);
    toast.error("Deleted from watch Later", {
      style: { background: "#333", color: "#fff" },
      duration: 1000,
    });
  }
  localStorage.setItem("WatchLater", JSON.stringify(WatchLater));
};
