using Umbraco.Cms.Core;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;

namespace TimeDashboard.Client.PropertyEditors;

[DataEditor(
    alias: "styled.textbox", 
    type: EditorType.PropertyValue, 
    name: "Styled textbox",
    view: "styledtextbox",
    ValueType = ValueTypes.String,
    Group = Constants.PropertyEditors.Groups.Common,
    ValueEditorIsReusable = true)]
public class StyledTextboxPropertyEditor : DataEditor
{
    private readonly IEditorConfigurationParser _editorConfigurationParser;

    private readonly IIOHelper _ioHelper;

    public StyledTextboxPropertyEditor(
        IDataValueEditorFactory dataValueEditorFactory,
        IIOHelper ioHelper,
        IEditorConfigurationParser editorConfigurationParser)
        : base(dataValueEditorFactory)
    {
        _ioHelper = ioHelper;
        _editorConfigurationParser = editorConfigurationParser;
    }

    protected override IConfigurationEditor CreateConfigurationEditor()
        => new StyledTextboxConfigurationEditor(_ioHelper, _editorConfigurationParser);

    protected override IDataValueEditor CreateValueEditor()
        => DataValueEditorFactory.Create<StyledTextboxValueEditor>(Attribute!);

    internal class StyledTextboxValueEditor : DataValueEditor
    {
        public StyledTextboxValueEditor(
            IShortStringHelper shortStringHelper,
            IJsonSerializer jsonSerializer,
            IIOHelper ioHelper,
            DataEditorAttribute attribute)
            : base(shortStringHelper, jsonSerializer, ioHelper, attribute)
        {
        }
    }
}

public class StyledTextboxConfigurationEditor :
    ConfigurationEditor<StyledTextboxConfiguration>
{
    public StyledTextboxConfigurationEditor(
        IIOHelper ioHelper,
        IEditorConfigurationParser editorConfigurationParser) : base(ioHelper, editorConfigurationParser)
    { }
}

public class StyledTextboxConfiguration : IConfigureValueType
{
    public string ValueType => ValueTypes.String;
}