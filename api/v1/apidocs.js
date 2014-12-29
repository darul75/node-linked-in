/** section: linked
 * mixin people
 **/
/** section: linked
 *  people#getCurrent(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 *  - secure-urls (Boolean): Optional. Indicate that you want the URLs in your response to be HTTPS.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~](/people/~)
 * - Documentation [link](https://developer.linkedin.com/documents/profile-api)
 **/
/** section: linked
 *  people#getMember(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - id (String): Optional. A unique identifier token for this member.
 *  - url (String): Optional. Public profile URL.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 *  - secure-urls (Boolean): Optional. Indicate that you want the URLs in your response to be HTTPS.
 * 
 *  ##### See Also
 * 
 * - REST [/people/](/people/)
 * - Documentation [link](https://developer.linkedin.com/documents/profile-api)
 **/
/** section: linked
 *  people#getCurrentConnections(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - modified (String): Optional. Values are: 'updated' or 'new'.
 *  - modified-since (Number): Optional. Value as a Unix time stamp of milliseconds since epoch.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/connections](/people/~/connections)
 * - Documentation [link](https://developer.linkedin.com/documents/connections-api)
 **/
/** section: linked
 *  people#getMemberConnections(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - idOrUrl (String): Required. A unique identifier token for this member or public URL.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - modified (String): Optional. Values are: 'updated' or 'new'.
 *  - modified-since (Number): Optional. Value as a Unix time stamp of milliseconds since epoch.
 * 
 *  ##### See Also
 * 
 * - REST [/people/:idOrUrl/connections](/people/:idOrUrl/connections)
 * - Documentation [link](https://developer.linkedin.com/documents/connections-api)
 **/
/** section: linked
 *  people#search(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - keywords (String): Optional. Use this field when you don't know how to more accurately map the input to a more specific parameter. (Don't forget to URL encode this data.)
 *  - first-name (String): Optional. The member's first name.
 *  - last-name (String): Optional. The member's last name.
 *  - company-name (String): Optional. Members who have a matching company name on their profile. company-name can be combined with the current-company parameter to specifies whether the person is or is not still working at the company.
 *  - current-company (String): Optional. Valid values are true or false. A value of true matches members who currently work at the company specified in the company-name parameter. A value of false matches members who once worked at the company. Omitting the parameter matches members who currently or once worked the company.
 *  - title (String): Optional. Matches members with that title on their profile. Works with the current-title parameter.
 *  - current-title (String): Optional. Valid values are true or false. A value of true matches members whose title is currently the one specified in the title-name parameter. A value of false matches members who once had that title. Omitting the parameter matches members who currently or once had that title.
 *  - school-name (String): Optional. Members who have a matching school name on their profile. school-name can be combined with the current-school parameter to specifies whether the person is or is not still at the school. It's often valuable to not be too specific with the school name. The same explation provided with company name applies: 'Yale' vs. 'Yale University'.
 *  - current-school (String): Optional. Valid values are true or false. A value of true matches members who currently attend the school specified in the school-name parameter. A value of false matches members who once attended the school. Omitting the parameter matches members who currently or once attended the school.
 *  - country-code (String): Optional. Matches members with a location in a specific country. Values are defined in by ISO 3166 standard. Country codes must be in all lower case.
 *  - postal-code (String): Optional. Matches members centered around a Postal Code. Must be combined with the country-code parameter. Not supported for all countries.
 *  - distance (String): Optional. The degree distance of the fetched profile from the member who fetched the profile.
 *  - facet (String): Optional. Facet values to search over.
 *  - facets (String): Optional. Facet buckets to return.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - sort (String): Optional. Controls the search result order.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people-search](/people-search)
 * - Documentation [link](https://developer.linkedin.com/documents/people-search-api)
 **/
/** section: linked
 * mixin groups
 **/
/** section: linked
 *  groups#getDetail(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/groups/:group-id](/groups/:group-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#profiledetails)
 **/
/** section: linked
 *  groups#getMembershipDetail(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships/:group-id](/people/~/group-memberships/:group-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#getMemberships(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - membership-state (String): Optional. The state of the caller’s membership to the specified group. Use the value member to retrieve the groups to which a user belongs.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships](/people/~/group-memberships)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#updateMembership(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships/:group-id](/people/~/group-memberships/:group-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#updateMembershipFull(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships/](/people/~/group-memberships/)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#join(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships/:group-id](/people/~/group-memberships/:group-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#joinAdvanced(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships](/people/~/group-memberships)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#remove(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships/:group-id](/people/~/group-memberships/:group-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#membergroups)
 **/
/** section: linked
 *  groups#getPosts(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - role (String): Optional. Filter for posts related to the caller. Valid only for group-memberships/{id}/posts resource.
 *  - order (String): Optional. Sort order for posts.
 *  - category (Array): Optional. Category of posts.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/groups/:group-id/posts](/groups/:group-id/posts)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#groupposts)
 **/
/** section: linked
 *  groups#getMembershipPosts(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - role (String): Optional. Filter for posts related to the caller. Valid only for group-memberships/{id}/posts resource.
 *  - order (String): Optional. Sort order for posts.
 *  - category (Array): Optional. Category of posts.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/group-memberships/:group-id/posts](/people/~/group-memberships/:group-id/posts)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#groupposts)
 **/
/** section: linked
 *  groups#getSuggestionPosts(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - role (String): Optional. Filter for posts related to the caller. Valid only for group-memberships/{id}/posts resource.
 *  - order (String): Optional. Sort order for posts.
 *  - category (Array): Optional. Category of posts.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/suggestions/groups/:group-id/posts](/people/~/suggestions/groups/:group-id/posts)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#groupposts)
 **/
/** section: linked
 *  groups#addPost(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - REST [/groups/:group-id/posts](/groups/:group-id/posts)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#create)
 **/
/** section: linked
 *  groups#getPost(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required. The unique identifier for a post.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/posts/:post-id](/posts/:post-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#getPostsComments(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - group-id (String): Optional. Default. The group ID. Read-only. The ID is assigned automatically when the group is created.
 *  - post-id (String): Required. The unique identifier for a post.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/posts/:post-id/comments](/posts/:post-id/comments)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#likePost(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required. The unique identifier for a post.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/posts/:post-id/relation-to-viewer/is-liked](/posts/:post-id/relation-to-viewer/is-liked)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#followPost(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required. The unique identifier for a post.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/posts/:post-id/relation-to-viewer/is-following](/posts/:post-id/relation-to-viewer/is-following)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#flagPost(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required. The unique identifier for a post.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - REST [/posts/:post-id/category/code](/posts/:post-id/category/code)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#removeFlagPost(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required. The unique identifier for a post.
 * 
 *  ##### See Also
 * 
 * - REST [/posts/:post-id](/posts/:post-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#post)
 **/
/** section: linked
 *  groups#getComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - comment-id (String): Required. The unique identifier for a comment.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/comments/:comment-id](/comments/:comment-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#comments)
 **/
/** section: linked
 *  groups#postComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - post-id (String): Required. The unique identifier for a post.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - REST [/post/:post-id/comments](/post/:post-id/comments)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#comments)
 **/
/** section: linked
 *  groups#deleteComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - comment-id (String): Required. The unique identifier for a comment.
 * 
 *  ##### See Also
 * 
 * - REST [/comments/:comment-id](/comments/:comment-id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#comments)
 **/
/** section: linked
 *  groups#getFromSuggestions(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/suggestions/groups/](/people/~/suggestions/groups/)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#suggestgroups)
 **/
/** section: linked
 *  groups#removeSuggestions(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - id (String): Optional. A unique identifier token for this member.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/suggestions/groups/:id](/people/~/suggestions/groups/:id)
 * - Documentation [link](https://developer.linkedin.com/documents/groups-api#suggestgroups)
 **/
/** section: linked
 * mixin company
 **/
/** section: linked
 *  company#all(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 *  - is-company-admin (Boolean): Optional. Fetch a list of all companies the authenticated user is an administrator of.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 * 
 *  ##### See Also
 * 
 * - REST [/companies](/companies)
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#get(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id](/companies/:company-id)
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#getByUniversalName(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - universal-name (String): Required. Company name identifier, ex: Apple.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/](/companies/)
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#getByEmailDomain(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - email-domain (String): Required. Company email identifier. Ex: apple.com.
 * 
 *  ##### See Also
 * 
 * - REST [/companies](/companies)
 * - Documentation [link](https://developer.linkedin.com/documents/company-lookup-api-and-fields)
 **/
/** section: linked
 *  company#getUpdate(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - event-type (String): Optional. Any valid Company Update Type.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/updates](/companies/:company-id/updates)
 * - Documentation [link](https://developer.linkedin.com/reading-company-shares)
 **/
/** section: linked
 *  company#getUpdateComments(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - company-update-key (String): Optional. Update/update-key representing a particular company update. By default, a company update will only return all comments, limiting at a max of 100.
 *  - event-type (String): Optional. Any valid Company Update Type.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/updates/key=:company-update-key/update-comments](/companies/:company-id/updates/key=:company-update-key/update-comments)
 * - Documentation [link](https://developer.linkedin.com/reading-company-shares)
 **/
/** section: linked
 *  company#getUpdateCommentsLike(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - company-update-key (String): Optional. Update/update-key representing a particular company update. By default, a company update will only return all comments, limiting at a max of 100.
 *  - event-type (String): Optional. Any valid Company Update Type.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/updates/key=:company-update-key/likes](/companies/:company-id/updates/key=:company-update-key/likes)
 * - Documentation [link](https://developer.linkedin.com/reading-company-shares)
 **/
/** section: linked
 *  company#addShares(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - data (Json): Required. See https://developer.linkedin.com/documents/groups-fields
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/shares](/companies/:company-id/shares)
 * - Documentation [link](https://developer.linkedin.com/documents/targeting-company-shares)
 **/
/** section: linked
 *  company#getShareEnabled(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/is-company-share-enabled](/companies/:company-id/is-company-share-enabled)
 * - Documentation [link](https://developer.linkedin.com/creating-company-shares)
 **/
/** section: linked
 *  company#getCurrentShareEnabled(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/relation-to-viewer/is-company-share-enabled](/companies/:company-id/relation-to-viewer/is-company-share-enabled)
 * - Documentation [link](https://developer.linkedin.com/creating-company-shares)
 **/
/** section: linked
 *  company#getHistoricalFollowersStatistics(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - start-timestamp (Number): Optional. Starting timestamp of when the stats search should begin (milliseconds since epoch). Validation rule: ` ^[0-9]+$ `.
 *  - end-timestamp (Number): Optional. Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set. Validation rule: ` ^[0-9]+$ `.
 *  - time-granularity (String): Optional. Granularity of statistics. Supported values are 'day' and 'month'.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/historical-follow-statistics](/companies/:company-id/historical-follow-statistics)
 * - Documentation [link](https://developer.linkedin.com/historical-company-statistics)
 **/
/** section: linked
 *  company#getHistoricalStatusUpdate(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - start-timestamp (Number): Optional. Starting timestamp of when the stats search should begin (milliseconds since epoch). Validation rule: ` ^[0-9]+$ `.
 *  - end-timestamp (Number): Optional. Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set. Validation rule: ` ^[0-9]+$ `.
 *  - time-granularity (String): Optional. Granularity of statistics. Supported values are 'day' and 'month'.
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/historical-status-update-statistics](/companies/:company-id/historical-status-update-statistics)
 * - Documentation [link](https://developer.linkedin.com/historical-company-statistics)
 **/
/** section: linked
 *  company#getStatistics(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - company-id (String): Required. The unique internal numeric company identifier.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/company-statistics](/companies/:company-id/company-statistics)
 * - Documentation [link](https://developer.linkedin.com/company-statistics)
 **/
/** section: linked
 *  company#getNumFollowers(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - seniorities (String): Optional. Level of seniority to target.
 *  - geos (String): Optional. See geographies for the valid values.
 *  - companySizes (String): Optional. Specify the size range for the company.
 *  - jobFunc (String): Optional. Job functions.
 *  - industries (String): Optional. The industry the LinkedIn member has indicated their profile belongs to (Industry Codes).
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/num-followers](/companies/:company-id/num-followers)
 * - Documentation [link](https://developer.linkedin.com/documents/targeting-company-shares)
 **/
/** section: linked
 *  company#addShareComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates/key=:update-key/update-comments](/people/~/network/updates/key=:update-key/update-comments)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  company#likeShareComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates/key=:update-key/is-liked](/people/~/network/updates/key=:update-key/is-liked)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  company#addUpdateComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 *  - company-id (String): Required. The unique internal numeric company identifier.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/companies/:company-id/updates/key=:update-key/update-comments-as-company/](/companies/:company-id/updates/key=:update-key/update-comments-as-company/)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  company#search(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - keywords (String): Optional. Use this field when you don't know how to more accurately map the input to a more specific parameter. (Don't forget to URL encode this data.)
 *  - hq-only (String): Optional. Matching companies by the headquarters location. When this is set to 'true' and a location facet is used, this restricts returned companies to only those whose headquarters resides in the specified location.
 *  - facet (String): Optional. Facet values to search over.
 *  - facets (String): Optional. Facet buckets to return.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - sort (String): Optional. Controls the search result order.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/company-search](/company-search)
 * - Documentation [link](https://developer.linkedin.com/documents/company-search)
 **/
/** section: linked
 * mixin jobs
 **/
/** section: linked
 *  jobs#get(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - job-id (String): Optional. The unique identifier for a job.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/jobs/:job-id](/jobs/:job-id)
 * - Documentation [link](https://developer.linkedin.com/documents/job-lookup-api-and-fields)
 **/
/** section: linked
 *  jobs#getCurrentBookmarks(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/job-bookmarks](/people/~/job-bookmarks)
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#bookmark(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/job-bookmarks](/people/~/job-bookmarks)
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#removeBookmark(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - job-id (String): Optional. The unique identifier for a job.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/job-bookmarks/:job-id](/people/~/job-bookmarks/:job-id)
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#getCurrentSuggestions(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - job-id (String): Optional. The unique identifier for a job.
 * 
 *  ##### See Also
 * 
 * - REST [people/~/suggestions/job-suggestions:(jobs)](people/~/suggestions/job-suggestions:(jobs))
 * - Documentation [link](https://developer.linkedin.com/documents/job-bookmarks-and-suggestions)
 **/
/** section: linked
 *  jobs#add(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/jobs](/jobs)
 * - Documentation [link](https://developer.linkedin.com/documents/posting-job)
 **/
/** section: linked
 *  jobs#update(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - partner-job-id (String): Optional. Unique ID for the job created by the partner (must be unique for each job posted).
 *  - data (Json): Optional.
 * 
 *  ##### See Also
 * 
 * - REST [/jobs](/jobs)
 * - Documentation [link](https://developer.linkedin.com/documents/editing-job)
 **/
/** section: linked
 *  jobs#remove(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - partner-job-id (String): Optional. Unique ID for the job created by the partner (must be unique for each job posted).
 * 
 *  ##### See Also
 * 
 * - REST [/jobs](/jobs)
 * - Documentation [link](https://developer.linkedin.com/documents/closing-job)
 **/
/** section: linked
 *  jobs#search(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - keywords (String): Optional. Use this field when you don't know how to more accurately map the input to a more specific parameter. (Don't forget to URL encode this data.)
 *  - company-name (String): Optional. Members who have a matching company name on their profile. company-name can be combined with the current-company parameter to specifies whether the person is or is not still working at the company.
 *  - job-title (String): Optional. Matches jobs with the same job title.
 *  - country-code (String): Optional. Matches members with a location in a specific country. Values are defined in by ISO 3166 standard. Country codes must be in all lower case.
 *  - postal-code (String): Optional. Matches members centered around a Postal Code. Must be combined with the country-code parameter. Not supported for all countries.
 *  - distance (String): Optional. The degree distance of the fetched profile from the member who fetched the profile.
 *  - facet (String): Optional. Facet values to search over.
 *  - facets (String): Optional. Facet buckets to return.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - sort (String): Optional. Controls the search result order.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/job-search](/job-search)
 * - Documentation [link](https://developer.linkedin.com/documents/job-search-api)
 **/
/** section: linked
 * mixin share
 **/
/** section: linked
 *  share#add(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/shares](/people/~/shares)
 * - Documentation [link](https://developer.linkedin.com/documents/share-api)
 **/
/** section: linked
 *  share#getNetworksUpdates(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - scope (String): Optional. self to return member's feed. Omitted to return aggregated network feed.
 *  - type (String): Optional. Any valid Network Update Type from the table below. Types must be in all capital letters. To specify more than one Network Update type, add the type parameter to the resource URL for each type.
 *  - start (Number): Optional. Record index at which to start pagination. Validation rule: ` ^[0-9]+$ `.
 *  - count (Number): Optional. Number of records to return. Validation rule: ` ^[0-9]+$ `.
 *  - after (Number): Optional. Timestamp after which to retrieve updates for (Ex: 1243834824000) note: precision is milliseconds since the epoch. Validation rule: ` ^[0-9]+$ `.
 *  - before (Number): Optional. Timestamp before which to retrieve updates for (Ex: 1243834824000) note: precision is milliseconds since the epoch. Validation rule: ` ^[0-9]+$ `.
 *  - show-hidden-members (String): Optional. true or false. default is false. Whether to display updates from people the member has chosen to 'hide' from their update stream.
 *  - url-field-selector (String): Optional. Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates](/people/~/network/updates)
 * - Documentation [link](https://developer.linkedin.com/documents/get-network-updates-and-statistics-api)
 **/
/** section: linked
 *  share#getNetworksStats(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  No other params, simply pass an empty Object literal `{}`
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/network-stats](/people/~/network/network-stats)
 * - Documentation [link](https://developer.linkedin.com/documents/get-network-updates-and-statistics-api)
 **/
/** section: linked
 *  share#getNetworksUpdatesComments(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates/key=:update-key/update-comments](/people/~/network/updates/key=:update-key/update-comments)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-reading-comments-and-likes-network-updates)
 **/
/** section: linked
 *  share#getNetworksUpdatesLike(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates/key=:update-key/likes](/people/~/network/updates/key=:update-key/likes)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-reading-comments-and-likes-network-updates)
 **/
/** section: linked
 *  share#addShareComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates/key=:update-key/update-comments](/people/~/network/updates/key=:update-key/update-comments)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  share#likeShareComment(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - update-key (String): Optional. Only needed if you want to fetch statistics for a specific company share.
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/network/updates/key=:update-key/is-liked](/people/~/network/updates/key=:update-key/is-liked)
 * - Documentation [link](https://developer.linkedin.com/documents/commenting-and-liking-company-share)
 **/
/** section: linked
 *  share#postNetworkUpdate(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/person-activities](/people/~/person-activities)
 * - Documentation [link](https://developer.linkedin.com/documents/post-network-update)
 **/
/** section: linked
 * mixin communications
 **/
/** section: linked
 *  communications#sendInvitation(msg, callback)
 *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Params on the `msg` object:
 * 
 *  - data (Json): Required.
 * 
 *  ##### See Also
 * 
 * - REST [/people/~/mailbox](/people/~/mailbox)
 * - Documentation [link](https://developer.linkedin.com/documents/invitation-api)
 **/
