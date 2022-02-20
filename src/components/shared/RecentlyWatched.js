export const handleRecentlyWatched = (item) => {
  let RecentlyWatched = JSON.parse(localStorage.getItem("RecentlyWatched"));
  if (RecentlyWatched == null) RecentlyWatched = [];
  if(RecentlyWatched.length > 12) RecentlyWatched.pop()
  if (!RecentlyWatched.some((recent) => recent.id === item.id)) {
    RecentlyWatched.unshift(item);
  }
  localStorage.setItem("RecentlyWatched", JSON.stringify(RecentlyWatched));
};


export const ClearRecentlyWatched = () => {
  let RecentlyWatched = JSON.parse(localStorage.getItem("RecentlyWatched"));
  RecentlyWatched = []
  localStorage.setItem("RecentlyWatched", JSON.stringify(RecentlyWatched));
}
