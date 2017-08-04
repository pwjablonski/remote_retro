defmodule SendActionItemToUsersViaEmailTest do
  alias RemoteRetro.Emails
  use RemoteRetro.IntegrationCase, async: false
  use Bamboo.Test, shared: true

  test "Distributing action items via email", %{session: facilitator_session, retro: retro} do
    retro_path = "/retros/" <> retro.id
    idea_text = "Do the test"
    facilitator_session = authenticate(facilitator_session) |> visit(retro_path)
    proceed_to_action_items_stage(facilitator_session)

    submit_idea(facilitator_session, %{category: "action-item", body: idea_text})

    assert facilitator_session |> find(Query.css("ul.action-item li[title='#{idea_text}']", count: 1))

    facilitator_session
    |> find(Query.css("i.close"))
    |> Element.click

    distribute_action_items(facilitator_session)

    Emails.action_items_email(retro.id) |> assert_delivered_email
  end
end
