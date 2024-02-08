using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Api.Management.Controllers.Tree;
using Umbraco.Cms.Api.Management.ViewModels.Tree;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace TimeDashboard.Client.Controllers.Tree;

[ApiController]
[BackOfficeRoute($"time/api/v{{version:apiVersion}}/tree")]
[ApiExplorerSettings(GroupName = "Time")]
[Authorize(Policy = "New" + AuthorizationPolicies.BackOfficeAccess)]
[MapToApi("time")]
public class TimeTreeControllerBase : EntityTreeControllerBase<EntityTreeItemResponseModel>
{
    protected override UmbracoObjectTypes ItemObjectType => UmbracoObjectTypes.Unknown;

    public TimeTreeControllerBase(IEntityService entityService)
        : base(entityService)
    { }

}
