using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Asp.Versioning;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using MimeKit.Encodings;

using Umbraco.Cms.Api.Common.ViewModels.Pagination;
using Umbraco.Cms.Api.Management.ViewModels;
using Umbraco.Cms.Api.Management.ViewModels.Tree;
using Umbraco.Cms.Core.Services;

namespace TimeDashboard.Client.Controllers.Tree;

[ApiVersion("1.0")]
public class TimeTreeChildrenController : TimeTreeControllerBase
{
    public TimeTreeChildrenController(IEntityService entityService) 
        : base(entityService)
    { }

    [HttpGet]
    [MapToApiVersion("1.0")]
    [ProducesResponseType(typeof(PagedViewModel<EntityTreeItemResponseModel>), StatusCodes.Status200OK)]
    public async Task<ActionResult<PagedViewModel<EntityTreeItemResponseModel>>> Children(Guid parentId, int skip = 0, int take = 100)
    {
        var items = GetChildren(parentId);
        return Ok(PagedViewModel(items, items.Count()));
    }


    private IEnumerable<EntityTreeItemResponseModel> GetChildren(Guid parentId)
    {
        yield return new EntityTreeItemResponseModel
        {
            Id = Guid.NewGuid(),
            HasChildren = false,
            Type = "menu-item",
            Parent = new ReferenceByIdModel
            {
                Id = parentId
            }
        };
    }
}
