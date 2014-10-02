package de.fhg.iais.roberta.persistence.dao;

import java.util.List;

import org.hibernate.Query;

import de.fhg.iais.roberta.dbc.Assert;
import de.fhg.iais.roberta.persistence.bo.Role;
import de.fhg.iais.roberta.persistence.bo.User;
import de.fhg.iais.roberta.persistence.connector.SessionWrapper;

public class UserDao extends AbstractDao<User> {
    /**
     * create a new DAO for users. This creation is cheap.
     *
     * @param session the session used to access the database.
     */

    public UserDao(SessionWrapper session) {
        super(User.class, session);
    }

    /**
     * ...
     *
     * @param account
     * @param password
     * @param roleAsString
     * @return the created user object; returns <code>null</code> if creation is unsuccessful (e.g. user already exists)
     */
    public User persistUser(String account, String password, String roleAsString) {
        Assert.notNull(account);
        Assert.notNull(password);
        Role role = Role.valueOf(roleAsString);
        Assert.notNull(role);
        User user = loadUser(account);
        if ( user == null ) {
            user = new User(account);
            user.setPassword(password);
            user.setRole(role);
            this.session.save(user);
            return user;
        } else {
            return null;
        }
    }

    public User loadUser(String account) {
        Assert.notNull(account);
        Query hql = this.session.createQuery("from User where account=:account");
        hql.setString("account", account);

        @SuppressWarnings("unchecked")
        List<User> il = hql.list();
        Assert.isTrue(il.size() <= 1);
        if ( il.size() == 0 ) {
            return null;
        } else {
            return il.get(0);
        }
    }

    public int deleteUserByAccountName(String accountName) {

        Assert.notNull(accountName);
        Query hql = this.session.createQuery("from User where accountName=:accountName");
        hql.setString("accountName", accountName);

        @SuppressWarnings("unchecked")
        List<User> il = hql.list();
        if ( il.size() == 0 ) {
            return 0;
        } else {
            User toBeDeleted = il.get(0);
            this.session.delete(toBeDeleted);
            return 1;
        }
    }
}