# Phase 4: Starring Ads

## Rails
### Models
* Starred

### Controllers
* Api::StarredController (create, destroy)

### Views
* user.json.jbuilder

## Flux
### Views (React Components)
* StarAd

### Stores
* Starred

### Actions
* ApiActions.receiveAllStarred -> triggered by ApiUtil
* ApiActions.receiveSingleStarred
* ApiActions.deleteStarred
* NotebookActions.fetchAllStarred-> triggers ApiUtil
* NotebookActions.fetchStarred
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllStarred
* ApiUtil.fetchSingleStarred
* ApiUtil.createStarred
* ApiUtil.destroyStarred

## Gems/Libraries
